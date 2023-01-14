$.validator.addMethod('regex', function(value, element, regexp){
    let regExp = new RegExp(regexp)
    return this.optional(element) || regExp.test(value)

  }, 'Please check input');

 $('#forms-contact').validate({
  rules : {
      email : {
        required : true,
        regex : "[A-Za-z]{1,32}"
    }
  },
  messages : {
    name : 'Введите имя правильно',
    email : 'Укажите корректный Email',
  }
})
