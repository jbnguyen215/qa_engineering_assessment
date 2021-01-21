import { Driver } from "selenium-webdriver/chrome";
import { Widgets } from "./pages/Widgets";
import * as numbers from "./assets/numbers.json";

describe("Sum widget testing", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });
    numbers.forEach((newNumber)=>{
      test(`Sum of ${newNumber.numberOne} plus ${newNumber.numberTwo} is ${newNumber.sum}`, async()=>{
          await widget.setSumInputOne(newNumber.numberOne);
          await widget.setSumInputTwo(newNumber.numberTwo);
          await widget.addButton();
          let sum = (await widget.getSumResult()).toString();
          expect(sum).toContain(newNumber.sum);
      })
    })
    
});