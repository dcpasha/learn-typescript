class Player {
    public readonly first: string;
    public readonly last: string;
    protected _score: number = 0;  // protected can be accessed in child classes

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secreteMethod(): void {
        console.log("Secrete Method");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore
        
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 99999;
    }


}

const omi = new Player("Omi", "Son")
omi.fullName;
omi.score;
omi.score = 3;
