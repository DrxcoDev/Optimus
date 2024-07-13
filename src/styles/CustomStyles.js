// Customize css class 

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[class*="["]');

    elements.forEach(element => {
        const classes = element.className.split(' ');
        classes.forEach(cls => {
            const match = cls.match(/(\w+)-\[(.+)\]/);
            if (match) {
                const property = match[1];
                const value = match[2];

                switch (property) {
                    case 'w':
                        element.style.width = value;
                        break;
                    case 'height':
                        element.style.height = value;
                        break;
                    case 'bg':
                        element.style.backgroundColor = value;
                        break;
                    // Añade más casos según sea necesario
                }
            }
        });
    });
});
