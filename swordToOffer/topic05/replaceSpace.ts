const regx = /\s/g;
function replaceSpace(s: string): string {
    return s.replace(regx, '%20');
};

const testStr = "We are happy.";
console.log(replaceSpace(testStr) === "We%20are%20happy.");
