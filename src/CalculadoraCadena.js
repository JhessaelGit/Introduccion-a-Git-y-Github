class CalcularCadena {
    optenerArrayDeNumerosDeUnaCadena(cadena)
    {
        let ArrayNumeros=[];
        let numeroOptenido=0;
        for(let i=0;i<cadena.length;i++)
        {
            let caracter=cadena.charAt(i);
            let EsUnNumero=!isNaN(caracter)
            let ElCaracterNoEstaVacio=caracter !== " "
            let laPocicionEsMenorQueElTamanioDeLaCadena=i<cadena.length

            while((EsUnNumero && ElCaracterNoEstaVacio && laPocicionEsMenorQueElTamanioDeLaCadena))
            {
                numeroOptenido=numeroOptenido*10+Number(caracter);
                //variables cambiando
                i++;
                caracter=cadena.charAt(i)
                //condicionales
                ElCaracterNoEstaVacio=caracter !== " "
                EsUnNumero=!isNaN(caracter)
                laPocicionEsMenorQueElTamanioDeLaCadena=i<cadena.length
            }
            ArrayNumeros.push(numeroOptenido)
            numeroOptenido=0;
        }
        return ArrayNumeros;
    }
  calcularSumaDeNumerosEnLaCadena(cadena) {
    let suma=0;
    let ArrayNumerosDeLaCadena=this.optenerArrayDeNumerosDeUnaCadena(cadena);
    for(let i=0;i<ArrayNumerosDeLaCadena.length;i++)
    {
        if(ArrayNumerosDeLaCadena[i]<=1000)
        {
            suma=suma+ArrayNumerosDeLaCadena[i]
        }
    }
    return suma;
  }
}

export default CalcularCadena;
