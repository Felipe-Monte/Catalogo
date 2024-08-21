import React from "react";
import { Container } from "./styles";

const ButtonBackToTop = () => {
  const [ isVisible, setIsVisible] = React.useState(false)

  function toggleVisibility() {
    if(window.scrollY > 1500){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }

  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [])

  return(
    <Container>
      {isVisible && (
        <button onClick={scrollToTop}>
          ↑ 
        </button>
      )}
    </Container>
  )
}

export default ButtonBackToTop;
