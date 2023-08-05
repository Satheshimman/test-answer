{
    class Details_first {
        constructor(value){
            this.a=value
           
        }
        send(){
            return "hi im " + this.a
        }
    }

    class Details_second extends Details_first{
        constructor(value,b){
            super(value)
            this.role=b
        }
        show(){
            return this.send() + " iam a " + this.role
        }
    }

    let check=new Details_second("sathesh","vIp")

    console.log(check)

    
    console.log(check.show())
}