export class Button {
    title?: String;
    nameBack?: string;

    constructor(title: String, nameBack: string) {
        this.title = title;
        this.nameBack = nameBack;
    }

    a = {
        textDecoration: 'none'
    }

    Button() {
        return (
            <div className={this.nameBack} >
                <p className='button_p'>{this.title}</p>
            </div>
        )
    }
}