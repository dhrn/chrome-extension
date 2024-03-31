export function fibonacci(n: number): number {
    if(n == 0)
       return 0;
    else if(n == 1)
       return 1;
    else
       return (fibonacci(n-1) + fibonacci(n-2));
 }
 

export function exposedforContenScript(n: number): number {
   console.log('reached worker', n)
   const result = fibonacci(n);
   console.log('result', n, result)
   return result
 }
 