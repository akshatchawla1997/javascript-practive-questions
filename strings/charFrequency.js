// Calculate frequency of characters in a string

function charfrequency(string){
    let frequency = {}
    for (let char of string){
        if(frequency[char]){
            frequency[char]++
        }else{
            frequency[char]=1;
        }
    }
    return frequency;
}
const str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(charfrequency(str))
