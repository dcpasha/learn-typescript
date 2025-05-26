class PlayerShortcut {
    private score: number = 0;
    // Parameter Properties
    constructor(public first: string, public last: string) {
    }

    private secreteMethod(): void {
        console.log("Secrete Method")

    }
}

const richard = new PlayerShortcut("Richard", "Cat")
