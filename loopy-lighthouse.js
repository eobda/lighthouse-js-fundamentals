for (let i = 100; i <= 200; i++) {
  let print = "";

  if (i % 3 === 0) {
    print += "Loopy";
  }
  
  if (i % 4 === 0) {
    print += "Lighthouse";
  }

 if (i % 3 !== 0 && i % 4 !== 0) {
    print = i;
  }

  console.log(print);
}