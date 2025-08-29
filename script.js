// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Portfolio filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-purple-600', 'text-white');
            b.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        // Add active class to clicked button
        this.classList.add('active', 'bg-purple-600', 'text-white');
        this.classList.remove('bg-gray-200', 'text-gray-700');
        
        const filter = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal functionality
const modalData = {
    modal1: {
        title: "Bloom Coffee Co.",
        category: "Branding",
        image: "bg-gradient-to-br from-pink-400 to-purple-600",
        description: "A complete brand identity project for Bloom Coffee Co., a premium coffee roaster focusing on sustainable and ethically sourced beans. The project included logo design, color palette development, typography selection, and comprehensive brand guidelines.",
        details: ["Duration: 6 weeks", "Client: Bloom Coffee Co.", "Year: 2024", "Deliverables: Logo, Brand Guidelines, Stationery"],
        tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"]
    },
    modal2: {
        title: "TechStart Landing",
        category: "Web Design",
        image: "bg-gradient-to-br from-blue-400 to-indigo-600",
        description: "Modern and conversion-focused landing page design for a technology startup. The design emphasizes clean aesthetics, clear value proposition, and strategic call-to-action placement to maximize user engagement and conversions.",
        details: ["Duration: 4 weeks", "Client: TechStart Inc.", "Year: 2024", "Deliverables: Landing Page Design, Mobile Version"],
        tech: ["Figma", "Adobe XD", "Principle"]
    },
    modal3: {
        title: "Annual Report 2024",
        category: "Print Design",
        image: "bg-gradient-to-br from-green-400 to-teal-600",
        description: "Corporate annual report design featuring comprehensive data visualization, infographics, and clean layout design. The report successfully communicated complex financial information in an accessible and visually appealing format.",
        details: ["Duration: 8 weeks", "Client: Global Corp", "Year: 2024", "Pages: 64"],
        tech: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]
    },
    modal4: {
        title: "Fitness Plus",
        category: "Branding",
        image: "bg-gradient-to-br from-orange-400 to-red-600",
        description: "Dynamic logo design for Fitness Plus, a modern fitness center chain. The logo combines strength and movement with contemporary typography to appeal to fitness enthusiasts of all levels.",
        details: ["Duration: 3 weeks", "Client: Fitness Plus", "Year: 2024", "Deliverables: Logo Variations, Usage Guidelines"],
        tech: ["Adobe Illustrator", "Adobe Photoshop"]
    },
    modal5: {
        title: "FoodieApp UI",
        category: "Web Design",
        image: "bg-gradient-to-br from-purple-400 to-pink-600",
        description: "Mobile app interface design for a food delivery service focusing on user experience and intuitive navigation. The design includes onboarding screens, restaurant browsing, ordering flow, and user profile management.",
        details: ["Duration: 10 weeks", "Client: FoodieApp", "Year: 2024", "Screens: 45+"],
        tech: ["Figma", "Principle", "Adobe XD"]
    },
    modal6: {
        title: "Organic Tea Package",
        category: "Print Design",
        image: "bg-gradient-to-br from-yellow-400 to-orange-600",
        description: "Eco-friendly packaging design for premium organic tea products. The design emphasizes natural elements and sustainability while maintaining premium appeal and shelf presence.",
        details: ["Duration: 5 weeks", "Client: Pure Leaf Organics", "Year: 2024", "Variants: 6 Tea Types"],
        tech: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Dimension"]
    }
};

function openModal(modalId) {
    const modal = document.getElementById('portfolio-modal');
    const data = modalData[modalId];
    
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-image').className = `mb-6 h-64 rounded-xl ${data.image} flex items-center justify-center`;
    document.getElementById('modal-description').textContent = data.description;
    
    const detailsList = document.getElementById('modal-details');
    detailsList.innerHTML = '';
    data.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
    
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full';
        span.textContent = tech;
        techContainer.appendChild(span);
    });
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('portfolio-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const project = formData.get('project');
    const message = formData.get('message');
    
    // Show success message
    alert(`Thank you ${name}! Your message about "${project}" has been received. This is a demo form - in a real website, this would send an email to the designer.`);
    
    // Reset form
    event.target.reset();
}

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});