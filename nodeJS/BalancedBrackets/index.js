function solution(s) {
    const resultConstants = {
        YES: 'YES',
        NO: 'NO',
    };

    const pairBracketsOpen = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    const pairBranketsClose = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    const createStack = () => {
        const stack = [];
        const push = (item) => {
            stack.push(item);
        }

        const remove = () => {
            return stack.pop();
        }

        const values = () => {
            return stack;
        }

        return { push, remove, values };
    };

    const myStackBracketsOpen = createStack();
    const myStackbracketsClose = createStack();

    const bracketsArray = [...s];
    bracketsArray.forEach((bracket) => {
        if (pairBracketsOpen[bracket]) {
            myStackBracketsOpen.push(bracket);
        }

        if (pairBranketsClose[bracket]) {
            myStackbracketsClose.push(bracket);
        }

        const pairBracketClose = pairBranketsClose[bracket];
        if (pairBracketClose) {
            const lastBracketOpen = myStackBracketsOpen.remove();
            const lastBracketClose = myStackbracketsClose.remove();
            if (lastBracketOpen !== pairBracketClose) {
                myStackbracketsClose.push(lastBracketClose);
            }
        }
    });

    const result = myStackbracketsClose.values().length === 0 &&
        myStackBracketsOpen.values().length === 0
        ? resultConstants.YES
        : resultConstants.NO;

    return result;
}