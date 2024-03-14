document.addEventListener('DOMContentLoaded', () => {
	// Function to open a modal with content
	function openModal(content) {
		const modal = document.createElement('div');
		modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                ${content}
            </div>
        `;
		modal.className = 'modal';

		// Style the modal (Basic example, adjust according to your needs)
		Object.assign(modal.style, {
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#fff',
			padding: '20px',
			zIndex: 1000,
			maxWidth: '80%',
			maxHeight: '80%',
			overflowY: 'auto',
		});

		// Close modal functionality
		modal.querySelector('.close').addEventListener('click', () => {
			modal.remove();
		});

		document.body.appendChild(modal);
	}

	// Attach click event listeners to each portfolio piece
	const portfolioPieces = document.querySelectorAll('.portfolio-piece');
	portfolioPieces.forEach(piece => {
		piece.addEventListener('click', () => {
			// For this example, let's assume the description is stored directly in a data attribute
			// Adjust this to fit how you're actually storing/displaying the description
			const description = piece.dataset.description;
			openModal(description);
		});
	});
});
