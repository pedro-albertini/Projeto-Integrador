document.addEventListener('DOMContentLoaded', function() {
    // Elementos das partes do formulário
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const part3 = document.getElementById('part3');
    
    // Botões de navegação
    const nextToPart2 = document.getElementById('nextToPart2');
    const backToPart1 = document.getElementById('backToPart1');
    const nextToPart3 = document.getElementById('nextToPart3');
    const backToPart2 = document.getElementById('backToPart2');
    
    // Elementos da barra de progresso
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const line1_2 = document.getElementById('line1-2');
    const line2_3 = document.getElementById('line2-3');

    // Configuração dos selects Sim/Não
    const selects = document.querySelectorAll('.yes-no-select');
    selects.forEach(select => {
        select.addEventListener('change', function() {
            const detailsId = this.id.replace('-select', '-details');
            const detailsInput = document.getElementById(detailsId);
            
            if (this.value === 'sim') {
                detailsInput.classList.add('active');
            } else {
                detailsInput.classList.remove('active');
                detailsInput.querySelector('input').value = '';
            }
        });
    });

    // Navegação entre as partes
    nextToPart2.addEventListener('click', function() {
        if (validateForm(part1)) {
            part1.classList.remove('active');
            part2.classList.add('active');
            step2.classList.add('active');
            line1_2.classList.add('active');
        }
    });
    
    backToPart1.addEventListener('click', function() {
        part2.classList.remove('active');
        part1.classList.add('active');
        step2.classList.remove('active');
        line1_2.classList.remove('active');
    });
    
    nextToPart3.addEventListener('click', function() {
        if (validateForm(part2)) {
            part2.classList.remove('active');
            part3.classList.add('active');
            step3.classList.add('active');
            line2_3.classList.add('active');
        }
    });
    
    backToPart2.addEventListener('click', function() {
        part3.classList.remove('active');
        part2.classList.add('active');
        step3.classList.remove('active');
        line2_3.classList.remove('active');
    });

    // Função de validação
    function validateForm(part) {
        const requiredFields = part.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
        
        return isValid;
    }
});