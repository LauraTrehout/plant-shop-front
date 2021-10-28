import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import "./ScrollToTop.css";

const ScrollToTop = () => {
const [isVisible, setIsVisible] = useState(false);

const scrollToTop = () => {
    window.scroll(0,0)
}

useEffect(() => {
const toggleVisibility = () =>
window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

window.addEventListener('scroll', toggleVisibility)
return () => window.removeEventListener('scroll', toggleVisibility)
}, [])

return isVisible ? (
<div>
<AiOutlineArrowUp className='scroll-top' onClick={scrollToTop}/>
</div>
) : null;
};

export default ScrollToTop;
