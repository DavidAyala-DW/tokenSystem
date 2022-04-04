export default function Home() {

  async function handleSubmit(e){

    e.preventDefault();

    const id = document.getElementById("token").value;

    const productId = id.toString().trim().replaceAll("'","").replaceAll('"',"");

    const keys = productId.split("-");
    let validCombination = "";
    
    keys.forEach(key => validCombination += `${key.length}` )

    if(validCombination !== "844412"){
      alert("Token Invalid");
      return;
    }

    const formData = new FormData(e.target)
    const objectJson  = JSON.stringify(Object.fromEntries(formData));
    const request = await fetch("/api/tokens",{
      method: "POST",
      body: objectJson,
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const {status} = request;

    if(status !== 201 || status>400){
      alert("something went wrong");
      return;
    }

    alert("Token added sucessfully");

  
  }

  return (

    <main className="min-h-screen max-w-[1440px] mx-auto px-5 md:px-20 py-20">
      <h1>Add new tokenID </h1>
      <form 
        className="flex flex-col space-y-5 pt-5"
        onSubmit={handleSubmit}
      >
        <input 
          className="border max-w-max px-2 py-1 outline-none" 
          type="text" 
          placeholder="Add token" 
          name="token"
          id="token" 
        />

        <input 
          type="submit" 
          value="Add new Token" 
          className="px-4 py-2 text-center text-white bg-rose-400 cursor-pointer max-w-max"
        />
      </form>
    </main>

  )
}
