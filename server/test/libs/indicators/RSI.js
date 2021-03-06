const mocha = require('mocha');
const assert = require('chai').assert;

const RSI = require('../../../libs/indicators/RSI');

describe('Indicators - RSI', () => {
  it('should calculate a RSI', function () {
    let values1 = [0.03942905, 0.04392796, 0.04765162, 0.04517327, 0.045491, 0.05476803, 0.0541574, 0.057, 0.05122999, 0.05158624, 0.0571, 0.06036029, 0.06543595, 0.0864442, 0.08650966, 0.08177442, 0.08258693, 0.08133237, 0.08057352, 0.07530004, 0.07389911, 0.07659014, 0.0760925, 0.07619996, 0.07320906, 0.07645593, 0.07904786, 0.07453816, 0.07330022, 0.06330002, 0.0673268, 0.07140002, 0.0718, 0.0767741, 0.07438594, 0.0745, 0.0756822, 0.07692296, 0.07296102, 0.06884297, 0.06667, 0.07133, 0.0737991, 0.07298951, 0.07240001, 0.07111035, 0.06988019, 0.06968897, 0.06901015, 0.07102435, 0.07010544, 0.06805265, 0.06898778, 0.06837669];
    let expected1 = [25.6];
    let opts1 = {
      period: 14,
      values: values1
    }
    let rsi1 = new RSI(opts1);
    let output1 = rsi1.calculate();

    assert.deepEqual(output1, expected1)
  });

});