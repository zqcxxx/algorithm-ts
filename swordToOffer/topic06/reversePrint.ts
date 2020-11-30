class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reversePrint(head: ListNode | null): number[] {
    if (!head) {
        return [];
    }
    const result = [];
    while(head) {
        result.push(head.val);
        head = head.next;
    }
    return result.reverse();
};
const head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(2);
console.log(reversePrint(head));
