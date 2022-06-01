$(document).ready(function(){

    // Dom elements
    let resultContent = $(".header-result");
    let fistNumContent = $(".num-first");
    let secondNumContent = $(".num-second");
    let operationContent = $(".operation");
  
  
    //variables
    let firstNum = "";
    let secondNum = "";
    let operation = "";
    let result = "";
    let nextStep = false;
  
  
    function addNumber(num) {
  
      if (nextStep) {
        secondNum += num;
        console.log("ikinci reqem",secondNum);
        secondNumContent.fadeIn();
        secondNumContent.html(secondNum);
      } else {
        firstNum += num;
        fistNumContent.fadeIn();
        console.log("birinci reqem",firstNum);
        fistNumContent.html(firstNum);
      }
  
    }
  
    function chooseOperator(opr) {
      operation = opr;
      nextStep = true;
      console.log(operation);
      operationContent.fadeIn();
      operationContent.html(operation);
    }
  
    function resultEqual() {
      switch (operation) {
        case "+":
          result = parseInt(firstNum) + +secondNum;
          break;
        case "-":
          result = +firstNum - +secondNum;
          break;
        case "*":
          result = +firstNum * +secondNum;
          break;
        default:
          result = +firstNum / +secondNum;
      }
  
      resultContent.fadeIn();
      resultContent.html(result);
    }
  
  
    function clearCalc() {
      firstNum = "";
      secondNum = "";
      operation = "";
      result = "";
      nextStep = false;
  
      operationContent.fadeOut();
      fistNumContent.fadeOut();
      secondNumContent.fadeOut();
      resultContent.fadeOut();
    }
  
    $(document).on("click", ".calc-button", function () {
  
      let button = $(this)
      let value = button.html()
      console.log(value);
  
      if(button.hasClass("calc-num")){
          //func addNumber
          addNumber(value)
          console.log("bu reqemdir");
      } else if (button.hasClass("calc-operation")) {
          //func oper
  
          console.log("bu operator");
          chooseOperator(value)
      } else if (button.hasClass("calc-equal")) {
          //func equal
          resultEqual()
          console.log("bu beraber button");
  
      }else{
          console.log("bu clear button");
          clearCalc()
          //func func
      }
  
    });
  
  
  
  
  
  
  
  
  
  })