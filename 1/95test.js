sinon.stub(window, "prompt");

prompt.onCall(0).returns("2");
prompt.onCall(1).returns("3");

describe("calculator", function() {
  before(function() {
    calculator.read();
  });

  it("при вводе 2 и 3 сумма равна 5", function() {
    assert.equal(calculator.sum(), 5);
  });

  it("при вводе 2 и 3 произведение равно 6", function() {
    assert.equal(calculator.mul(), 6);
  });
});

after(function() {
  prompt.restore();
}); Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
  });

  it("выводит старую дату в формате дд.мм.гг чч:мм", function() {
    assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
  });

});