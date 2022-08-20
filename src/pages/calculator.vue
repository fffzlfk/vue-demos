<script setup lang="ts">
let equation = $ref('0')
let isDecimalAdded = false
let isOperatorAdded = false
let isStarted = false

function isOperator(character: string): Boolean {
    return ["+", "-", "×", "÷"].indexOf(character) > -1;
}

function append(character: string) {
    if (equation.length > 9)
        return
    if (equation === '0' && !isOperator(character)) {
        if (character === '.') {
            equation += character
            isDecimalAdded = true
        } else {
            equation = character
        }
        isStarted = true
        return
    }
    if (!isOperator(character)) {
        if (character === '.' && isDecimalAdded)
            return
        if (character === '.') {
            isDecimalAdded = true
            isOperatorAdded = true
        } else
            isOperatorAdded = false
        equation += character
    }
    if (isOperator(character) && !isOperatorAdded) {
        equation += character
        isDecimalAdded = false
        isOperatorAdded = true
    }
}

function calculate() {
    const result = equation.replace(new RegExp("×", "g"), "*").replace(new RegExp("÷", "g"), "/")
    equation = parseFloat(eval(result).toFixed(9)).toString()
    isOperatorAdded = false
    isDecimalAdded = false
}

function calculateToggle() {
    if (isOperatorAdded || !isStarted)
        return
    equation += "* -1"
    calculate()
}

function calculatePercentage() {
    if (isOperatorAdded || !isStarted)
        return
    equation += "* 0.01"
    calculate()
}

function clear() {
    equation = "0"
    isDecimalAdded = false
    isOperatorAdded = false
    isStarted = false
}
</script>

<template>
    <div class="calculator">
        <div class="result" style="grid-area: result">
            {{ equation }}
        </div>
        <button style="grid-area: ac" @click="clear()">AC</button>
        <button style="grid-area: plus-minus" @click="calculateToggle()">±</button>
        <button style="grid-area: percent" @click="calculatePercentage()">%</button>
        <button style="grid-area: add" @click="append('+')">+</button>
        <button style="grid-area: subtract" @click="append('-')"> - </button>
        <button style="grid-area: multiply" @click="append('×')">×</button>
        <button style="grid-area: divide" @click="append('÷')">÷</button>
        <button style="grid-area: equal" @click="calculate">=</button>

        <button style="grid-area: number-1" @click="append('1')">1</button>
        <button style="grid-area: number-2" @click="append('2')">2</button>
        <button style="grid-area: number-3" @click="append('3')">3</button>
        <button style="grid-area: number-4" @click="append('4')">4</button>
        <button style="grid-area: number-5" @click="append('5')">5</button>
        <button style="grid-area: number-6" @click="append('6')">6</button>
        <button style="grid-area: number-7" @click="append('7')">7</button>
        <button style="grid-area: number-8" @click="append('8')">8</button>
        <button style="grid-area: number-9" @click="append('9')">9</button>
        <button style="grid-area: number-0" @click="append('0')">0</button>

        <button style="grid-area: dot" @click="append('.')">.</button>
    </div>
</template>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #eee;
}

.calculator {
    --button-width: 80px;
    --button-height: 80px;

    display: grid;
    grid-template-areas:
        "result result result result"
        "ac plus-minus percent divide"
        "number-7 number-8 number-9 multiply"
        "number-4 number-5 number-6 subtract"
        "number-1 number-2 number-3 add"
        "number-0 number-0 dot equal";
    grid-template-columns: repeat(4, var(--button-width));
    grid-template-rows: repeat(6, var(--button-height));
    box-shadow: -8px -8px 16px -10px rgba(255, 255, 255, 1),
        8px 8px 16px -10px rgba(0, 0, 0, 0.15);
    padding: 24px;
    border-radius: 20px;
}

.dark .calculator {
    box-shadow: -8px -8px 16px -10px #E4D192,
        8px 8px 16px -10px #FFCCB3;
    ;
}

.calculator button {
    margin: 8px;
    padding: 0;
    border: 0;
    display: block;
    outline: none;
    border-radius: calc(var(--button-height) / 2);
    font-size: 24px;
    font-family: Helvetica;
    color: #999;
    background: linear-gradient(135deg,
            rgba(230, 230, 230, 1) 0%,
            rgba(246, 246, 246, 1) 100%);
    box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
        4px 4px 10px -8px rgba(0, 0, 0, 0.3);
}

.dark .calculator button {
    background: #554994;
}

.calculator button:active {
    box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
        4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
}

.result {
    text-align: right;
    line-height: var(--button-height);
    font-size: 48px;
    font-family: Helvetic;
    padding: 0 20px;
    color: #666;
}

.dark .result {
    color: #FFDEB4;
}
</style>