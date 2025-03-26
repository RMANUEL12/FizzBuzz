import { assertEquals } from "jsr:@std/assert";
import { verificaFizzBuzz } from "./main.ts";


Deno.test(`Retorna "Nenhum valor inserido", caso a input estiver vazia`, () => {
  const valorInserido = "";

  const resultado = verificaFizzBuzz(valorInserido);

  assertEquals(resultado, "Nenhum valor inserido");
});

Deno.test("Retorna 1, caso o valor seja 1", () => {
  const valorInserido = 1;

  const resultado = verificaFizzBuzz(valorInserido);

  assertEquals(resultado, 1);
});

Deno.test("Retorna 2, caso o valor seja 2", () => {
  const valorInserido = 2;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 2);
});

Deno.test("Retorna Fizz, caso o valor seja 3", () => {
  const valorInserido = 3;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Fizz");
});

Deno.test("Retorna 4, caso o valor seja 4", () => {
  const valorInserido = 4;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 4);
});

Deno.test("Retorna Buzz, caso o valor seja 5", () => {
  const valorInserido = 5;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Buzz");
});

Deno.test("Retorna Fizz, caso o valor seja 6", () => {
  const valorInserido = 6;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Fizz");
});

Deno.test("Retorna 7, caso o valor seja 7", () => {
  const valorInserido = 7;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 7);
});

Deno.test("Retorna 8, caso o valor seja 8", () => {
  const valorInserido = 8;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 8);
});

Deno.test("Retorna Fizz, caso o valor seja 9", () => {
  const valorInserido = 9;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Fizz");
});

Deno.test("Retorna Buzz, caso o valor seja 10", () => {
  const valorInserido = 10;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Buzz");
});

Deno.test("Retorna 11, caso o valor seja 11", () => {
  const valorInserido = 11;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 11);
});

Deno.test("Retorna Fizz, caso o valor seja 12", () => {
  const valorInserido = 12;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Fizz");
});

Deno.test("Retorna 13, caso o valor seja 13", () => {
  const valorInserido = 13;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 13);
});

Deno.test("Retorna 14, caso o valor seja 14", () => {
  const valorInserido = 14;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 14);
});

Deno.test("Retorna FizzBuzz, caso o valor seja 15", () => {
  const valorInserido = 15;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "FizzBuzz");
});

Deno.test("Retorna 16, caso o valor seja 16", () => {
  const valorInserido = 16;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 16);
});

Deno.test("Retorna 17, caso o valor seja 17", () => {
  const valorInserido = 17;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 17);
});

Deno.test("Retorna Fizz, caso o valor seja 18", () => {
  const valorInserido = 18;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Fizz");
});

Deno.test("Retorna 19, caso o valor seja 19", () => {
  const valorInserido = 19;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, 19);
});

Deno.test("Retorna Buzz, caso o valor seja 20", () => {
  const valorInserido = 20;
  const resultado = verificaFizzBuzz(valorInserido);
  assertEquals(resultado, "Buzz");
});

Deno.test("Retorna Fizz, caso o valor seja 21", () => {
  const valorInserido = 21;
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, "Fizz")
})

Deno.test("Retorna 22, caso o valor seja 22", () => {
  const valorInserido = 22
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, 22)
})

Deno.test("Retorna 23, caso o valor seja 23", () => {
  const valorInserido = 23
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, 23)
})

Deno.test("Retorna Fizz, caso o valor seja 24", () => {
  const valorInserido = 24
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, "Fizz")
})

Deno.test("Retorna Buzz, caso o valor seja 25", () => {
  const valorInserido = 25
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, "Buzz")
})

Deno.test("Retorna 26, caso o valor seja 26", () => {
  const valorInserido = 26
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, 26)
})

Deno.test("Retorna Fizz, caso o valor seja 27", () => {
  const valorInserido = 27
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, "Fizz")
})

Deno.test("Retorna 28, caso o valor seja 28", () => {
  const valorInserido = 28
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, 28)
})

Deno.test("Retorna 29, caso o valor seja 29", () => {
  const valorInserido = 29
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, 29)
})

Deno.test("Retorna FizzBuzz, caso o valor seja 30", () => {
  const valorInserido = 30
  const resultado = verificaFizzBuzz(valorInserido)
  assertEquals(resultado, "FizzBuzz")
})