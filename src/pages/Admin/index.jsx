import { useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import jsonData from '../../products.json';
import { ActionButton, Container, Form } from './styles';

export default function Admin() {
  // Use reverse() copy to show newest first if desired, or just raw list.
  // jsonData is the initial state.
  const [products, setProducts] = useState(jsonData);

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    id: '',
    category: '',
    share: '',
    imgUrl: '',
    title: '',
    code: '',
    price: '',
    isAvailable: true,
    isNew: false,
    type: 'Comissão',
    measure: 'und',
  });

  // Filter products for the list view
  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.code.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [products, searchTerm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const generateId = () => {
    // Determine max ID safely
    const maxId = products.reduce((max, p) => {
      const parsed = parseInt(p.id);
      return !isNaN(parsed) && parsed > max ? parsed : max;
    }, 0);
    return (maxId + 1).toString();
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const saveToApi = async (newProductList) => {
    const saveRes = await fetch('/api/save-products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProductList),
    });
    if (!saveRes.ok) throw new Error('Falha ao atualizar products.json');
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      let finalImgUrl = formData.imgUrl;

      // 1. Upload Image if selected
      if (formData.imageFile) {
        const base64 = await fileToBase64(formData.imageFile);
        const uploadRes = await fetch('/api/upload-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: formData.imageFile.name,
            image: base64,
          }),
        });
        if (!uploadRes.ok) throw new Error('Falha ao salvar imagem');
        const uploadData = await uploadRes.json();
        finalImgUrl = uploadData.url;
      }

      // 2. Prepare Data
      const productData = {
        ...formData,
        imgUrl: finalImgUrl,
        // Ensure ID is present
        id: formData.id || (editingId ? formData.id : generateId()),
      };

      // Clean up internal flags
      delete productData.imageFile;
      delete productData.imagePreview;

      // 3. Update State
      let updatedProducts;
      if (editingId) {
        // Edit Mode
        updatedProducts = products.map((p) =>
          p.id === editingId ? productData : p,
        );
      } else {
        // Add Mode
        updatedProducts = [...products, productData];
      }

      // 4. Save to API
      await saveToApi(updatedProducts);
      setProducts(updatedProducts);

      alert(
        editingId
          ? 'Produto atualizado com sucesso!'
          : 'Produto criado com sucesso!',
      );

      resetForm();
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) return;

    try {
      const updatedProducts = products.filter((p) => p.id !== id);
      await saveToApi(updatedProducts);
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir: ' + error.message);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      ...product,
      imageFile: null,
      imagePreview: null, // Could set this to product.imgUrl to show current, but might look different logic wise
    });
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      id: '',
      category: '',
      share: '',
      imgUrl: '',
      title: '',
      code: '',
      price: '',
      isAvailable: true,
      isNew: false,
      type: 'Comissão',
      measure: 'und',
    });
  };

  return (
    <Container>
      <Header
        title="Admin"
        onSearch={() => {}}
        categorySelected="Admin"
      />

      <main>
        {/* FORM SECTION */}
        <Form onSubmit={handleSaveProduct}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2>
              {editingId ? `Editando Produto #${editingId}` : 'Novo Produto'}
            </h2>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                style={{ background: '#6c757d', width: 'auto' }}
              >
                Cancelar Edição
              </button>
            )}
          </div>

          <div className="form-group">
            <label>ID</label>
            <input
              name="id"
              value={formData.id}
              onChange={handleChange}
              disabled={!!editingId} // Disable ID editing to avoid breaking things
              placeholder={editingId ? '' : 'Automático'}
            />
          </div>

          <div className="form-group">
            <label>Título</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              list="categories"
            />
            <datalist id="categories">
              {[...new Set(jsonData.map((p) => p.category))].map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>

          <div className="form-group">
            <label>Preço (Ex: 15,00)</label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Código</label>
            <input
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Imagem (Upload)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  setFormData((prev) => ({
                    ...prev,
                    imgUrl: `/${file.name}`,
                    imageFile: file,
                    imagePreview: URL.createObjectURL(file),
                  }));
                }
              }}
            />
            {/* Show Current Image or Preview */}
            {(formData.imgUrl || formData.imagePreview) && (
              <div style={{ marginTop: '10px' }}>
                <p>
                  <strong>Caminho:</strong> {formData.imgUrl}
                </p>
                <img
                  src={formData.imagePreview || formData.imgUrl}
                  alt="Preview"
                  style={{
                    maxWidth: '150px',
                    maxHeight: '150px',
                    objectFit: 'contain',
                    border: '1px solid #ccc',
                  }}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Link de Compartilhamento</label>
            <input
              name="share"
              value={formData.share}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Tipo</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Comissão">Comissão</option>
              <option value="Direta">Direta</option>
            </select>
          </div>

          <div className="form-group">
            <label>Medida</label>
            <select
              name="measure"
              value={formData.measure}
              onChange={handleChange}
            >
              <option value="und">Unidade (und)</option>
              <option value="kit">Kit</option>
              <option value="cx">Caixa (cx)</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="isAvailable"
                checked={formData.isAvailable}
                onChange={handleChange}
              />
              &nbsp;Disponível
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="isNew"
                checked={formData.isNew}
                onChange={handleChange}
              />
              &nbsp;Novo
            </label>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: editingId ? '#ffc107' : '#28a745',
              color: editingId ? '#000' : '#fff',
            }}
          >
            {editingId ? 'Salvar Alterações' : 'Adicionar Produto'}
          </button>
        </Form>

        {/* LIST SECTION */}
        <div
          style={{
            marginTop: '40px',
            borderTop: '2px solid #eee',
            paddingTop: '20px',
          }}
        >
          <h3>Gerenciar Produtos Existentes ({products.length})</h3>

          <input
            type="text"
            placeholder="Buscar por nome ou código..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  background: '#fff',
                  border: '1px solid #eee',
                  borderRadius: '4px',
                  gap: '15px',
                }}
              >
                <div style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <img
                    src={p.imgUrl}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block' }}>{p.title}</strong>
                  <span style={{ color: '#666', fontSize: '0.9em' }}>
                    Cód: {p.code} | R$ {p.price}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <ActionButton
                    color="#ffc107"
                    style={{ color: '#000', padding: '5px 10px' }}
                    onClick={() => handleEdit(p)}
                  >
                    Editar
                  </ActionButton>
                  <ActionButton
                    color="#dc3545"
                    style={{ padding: '5px 10px' }}
                    onClick={() => handleDelete(p.id)}
                  >
                    Excluir
                  </ActionButton>
                </div>
              </div>
            ))}
          </div>
          {filteredProducts.length > 50 && (
            <p
              style={{ textAlign: 'center', color: '#666', marginTop: '10px' }}
            >
              Mostrando {filteredProducts.length} resultados.
            </p>
          )}
        </div>
      </main>
    </Container>
  );
}
