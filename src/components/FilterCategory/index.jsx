
import { useEffect, useRef, useState } from 'react';
import jsonData from '../../products.json';
import CategoryIcon from '../CategoryIcon';
import { Container } from './styles';

const FilterCategory = ({ onSelectCategory, selectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState(
    selectedCategory || 'Todos',
  );
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const listRef = useRef(null);

  // Atualiza a categoria ativa quando `selectedCategory` mudar no componente pai
  useEffect(() => {
    setActiveCategory(selectedCategory || 'Todos');
  }, [selectedCategory]);

  // Salva a posição de scroll ao trocar de categoria
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);

    // Salva a posição atual do scroll no localStorage
    if (listRef.current) {
      localStorage.setItem('categoryScrollLeft', listRef.current.scrollLeft);
    }
  };

  // Restaura posição de scroll ao montar o componente
  useEffect(() => {
    const savedScroll = localStorage.getItem('categoryScrollLeft');
    if (savedScroll && listRef.current) {
      listRef.current.scrollLeft = parseInt(savedScroll, 10);
    }
  }, []);

  // Rola horizontalmente com a roda do mouse
  useEffect(() => {
    const handleScroll = (event) => {
      if (listRef.current) {
        const scrollAmount = event.deltaY * 5;
        listRef.current.scrollLeft += scrollAmount;
        event.preventDefault();
      }
    };

    const ulElement = listRef.current;
    if (ulElement) {
      ulElement.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (ulElement) {
        ulElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  // Esconde/mostra o filtro ao scrollar no mobile
  useEffect(() => {
    let ticking = false;

    const handleWindowScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isMobile = window.innerWidth <= 600;

          if (isMobile) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
              // Scrollando para baixo
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
              // Scrollando para cima
              setIsVisible(true);
            }
          } else {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [lastScrollY]);

  const uniqueCategories = [...new Set(jsonData.map((p) => p.category))].sort();

  const categoryIcons = {
    todos: 'todos',
    acessórios: 'acessorios',
    alimentício: 'alimenticio',
    alumínio: 'aluminio',
    banheiro: 'banheiro',
    banho: 'banho',
    blusa: 'blusa',
    calcinha: 'calcinha',
    calça: 'calca',
    cama: 'cama',
    camisa: 'camisa',
    conjunto: 'conjunto',
    cosméticos: 'cosmeticos',
    cozinha: 'cozinha',
    cueca: 'cueca',
    dormir: 'dormir',
    infantil: 'infantil',
    perfumaria: 'perfumaria',
    rede: 'rede',
    saia: 'saia',
    short: 'short',
    sutiã: 'sutia',
    vestido: 'vestido',
  };

  return (
    <Container className={isVisible ? 'visible' : 'hidden'}>
      <ul ref={listRef}>
        <li
          onClick={() => handleCategoryClick('Todos')}
          className={activeCategory === 'Todos' ? 'active' : ''}
        >
          <div className="icon-wrapper">
            <CategoryIcon iconName="todos" />
          </div>
          <span>Todos</span>
        </li>
        {uniqueCategories.map((category, index) => {
          const categoryKey = category.toLowerCase();
          return (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={activeCategory === category ? 'active' : ''}
            >
              <div className="icon-wrapper">
                {categoryIcons[categoryKey] && (
                  <CategoryIcon iconName={categoryIcons[categoryKey]} />
                )}
              </div>
              <span>{category}</span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default FilterCategory;
