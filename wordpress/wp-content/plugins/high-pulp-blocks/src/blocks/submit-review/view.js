import { createRoot } from "react-dom/client";
import BlockApp from "./components/BlockApp";

const blocks = document.querySelectorAll('.wp-block-tk-submit-review');
blocks.forEach(block => {
	createRoot(block).render(<BlockApp />);
})
