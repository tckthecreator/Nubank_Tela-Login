/**
 *  Aqui vamos aplicar os UX Effects da aplicação.
 */


export const inputHasFocus = (type, focus) => {
    const id_input = `${type}-input`;
    const id_label = `${type}-label`;
    const input = document.getElementById(id_input);
    const label = document.getElementById(id_label);

    if (focus) {
        input.style.cssText += 'border-bottom: 1.5px var(--roxo) dotted;';
        label.style.cssText += 'color: var(--roxo); font-size: 13px';
    } else if (focus === false) {
        input.style.cssText += 'border-bottom: 1.5px var(--cinza) dotted;';
        label.style.cssText += 'color: var(--cinza); font-size: 18px';
    } else {
        console.log('something wrong');
    }
}

