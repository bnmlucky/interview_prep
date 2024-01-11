function isValid(s: string): boolean {
    const stack: string[] = [];
    const parenthesesMap: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i: number = 0; i < s.length; i++) {
        const currentChar: string = s[i];

        if (parenthesesMap.hasOwnProperty(currentChar)) {
            stack.push(currentChar);
        } else {
            const lastOpened: string = stack.pop() || '#';

            if (parenthesesMap[lastOpened] !== currentChar) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
