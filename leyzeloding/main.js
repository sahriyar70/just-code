async function loadMath(){

  const math = await import("./math.js");

  console.log(
    math.add(2, 3)
  );

}

console.log(loadMath())