class Controler {
     static staticvalues = 0;
    constructor(operator, number, Clear, Backspace, EnterNumber, Functions, Avg) {
        this._operator = operator;
        this._number = number;
        var operator = document.getElementsByClassName(this._operator);
        for (var i = 0; i < operator.length; i++) {
            operator[i].addEventListener('click', function () {
                if (this.id == "clear") {
                    Clear();
                } else if (this.id == "backspace") {
                    Backspace();
                } else if (this.id == "avg") {
                    Avg();
                } else {
                    Functions(this.id);
                }

            });
        }
        var number = document.getElementsByClassName(this._number);
        for (var i = 0; i < number.length; i++) {
            number[i].addEventListener('click', function () {
                EnterNumber(this.id);
            });
        }
    }


}
