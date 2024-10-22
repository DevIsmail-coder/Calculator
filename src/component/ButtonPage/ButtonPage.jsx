import  {useState} from 'react'
import './ButtonPage.css'

const ButtonPage = () => {
   const [value,setValue] = useState("")
  return (
    <div className='ButtonPagemain'>
    <div className='ButtonPagewrap'>
     <form className='ButtonPagecover'>
      <div className='ButtonPageDiv1'>
      <input className='ButtonPageIn' type='text' value={value}/>
      </div>
      <div className='ButtonPageDiv2'>
        <input type='button' value= "AC" onClick={e => setValue('')} />
        <input type='button' value= "DE" onClick={e => setValue(value.slice(0,-1))} />
        <input type='button' value= "/" onClick={e => setValue(value + e.target.value)} />
        <input type='button' value= "-" onClick={e => setValue(e.target.value)} />
      </div>
      <div className='ButtonPageDiv2'> 
      <input type='button' value= "7" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "8" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "9" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "+" onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='ButtonPageDiv2'>
      <input type='button' value= "4" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "5" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "6" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "." onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='ButtonPageDiv2'>
      <input type='button' value= "1" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "2" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "3" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "*" onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='ButtonPageDiv2'>
      <input type='button' value= "00" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "0" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "3" onClick={e => setValue(value + e.target.value)} />
      <input type='button' value= "=" onClick={e => setValue(eval(value))} />
      </div>
     </form>
     </div>
    </div>
  )
}

export default ButtonPage