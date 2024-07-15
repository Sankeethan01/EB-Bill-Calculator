

function calculate()
{
    let units=document.getElementById("unit").value
    let total=document.querySelector(".amount")

    if(units>250)
    {
       let bill=((units-250)*1.50)+(100*1.00)+(100*1.30)+(50*0.75)
       total.innerHTML=bill+"Rs"

    }
    else if(units<=250 && units>150)
    {
        let bill=((units-150)*1.30)+(100*1.00)+(50*0.75)
        total.innerHTML=bill+"Rs"
    }
    else if(units<=150 && units>50)
    {
        let bill=((units-50)*1.00)+(50*0.75)
       total.innerHTML=bill+"Rs"
    }
    else{
        let bill=units*0.75
       total.innerHTML=bill+"Rs"
    }
}