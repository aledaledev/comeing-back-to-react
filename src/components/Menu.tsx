import { useEffect } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import { useForm } from '../context/FormContext'
import { useMenu } from '../context/MenuContext'

const Menu = () => {

  const { menu, setMenu, options, changeOptions } = useMenu()
  const { openForm, setOpenForm } = useForm()

  useEffect(() => {

    if(options.rgb){
      document.body.className = 'rgb-body'
    } else {
      document.body.className = 'non-rgb-body'
    }

    if(options.dark){
      document.body.classList.add('dark-bg')
    } else {
      document.body.classList.remove('dark-bg')
    }
  
  },[options.rgb, options.dark])

  const hideMenu = () => {
    setOpenForm(!openForm)
    setMenu(false)
  }

  return (
    <div className='menu'>
        <button className='btn-menu' onClick={() => setMenu(true)}>
          <AiOutlineMenu size={22}/>
        </button>
        <div className={`menu-options ${menu?'menu-open':''}`}>
            <GrFormClose className='close-menu' size={20} onClick={() => setMenu(false)}/>
          <label htmlFor="rgb-bg" className={`${options.dark?'disabled-option':''}`}>
            RGB: 
            <input type="checkbox" id='rgb-bg' name='rgb' checked={options.rgb} disabled={options.dark} onChange={changeOptions}/>
          </label>
          <label htmlFor="dark-mode" className={`${options.rgb?'disabled-option':''}`}>
            DARK MODE: 
            <input type="checkbox" id='dark-mode' name='dark' checked={options.dark} disabled={options.rgb} onChange={changeOptions}/>
          </label>
          <label htmlFor="safe-mode">
            SAFE MODE: 
            <input type="checkbox" id='safe-mode' name='safe' checked={options.safe} onChange={changeOptions}/>
          </label>
          <button onClick={hideMenu}>create modal</button>
        </div>
    </div>
  )
}

export default Menu