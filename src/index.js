/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
        let count=0;
        for (let i=0;i<preferences.length; i++){
            let firstIndex = i+1; // первый идекс первое значение
            let firstValue =  preferences[i];// первое значение любит второй индекс
            let secondValue = preferences[firstValue-1];// второе значение любит третий индекс
            let thirdValue = preferences[secondValue-1];

            if (thirdValue===firstIndex && firstIndex!==firstValue){
                count++;
            }
        }
        let result = count/3;
        console.log(result);
        return result;
};