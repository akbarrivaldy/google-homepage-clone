import React, { useState, useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function SearchBar() {

  const [isFocus, setIsFocus] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [searchText, setSearchText] = useState('')

  function onChangeHandler(e) {
    const value = e.target.value
    if(value !== '') {
      setIsTyping(true)
    } else {
      setIsTyping(false)
    }

    setSearchText(value)
  }

  const id = Math.floor(Math.random() * 10000)
  const [isSearch, setIsSearch] = useLocalStorage(id, '')

  function submitHandler() {
    setIsSearch(searchText)
  }

  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    let data = [];
    for(let i = 0; i < localStorage.length; i++) {
      data.unshift({
        text: localStorage.getItem(localStorage.key(i))
      })
    }
    setSearchData(data)
  }, [])

  return (
    <div id="SearchBar" className={`${isTyping ? 'border_radius__typing' : ''} ${isFocus ? 'shadow-sm': ''} content__search`}>
      <div className="w-100 d-flex align-items-center py-1 px-3 gap-2">
        <div className="py-2 px-2">
          <i className="fas fa-search"></i>
        </div>
        <form className="content__searchbar" onSubmit={submitHandler}>
          <input onChange={(e) => onChangeHandler(e)} onBlur={() => setIsFocus(false)} onFocus={() => setIsFocus(true)} type="text" className="px-2" placeholder={isFocus ? '' : 'Search Google or type URL'} />
        </form>
        <div className="content__mic py-2 px-2">
          <i className="fas fa-microphone"></i>
        </div>
      </div>
      <hr className="mx-4 my-0" />

      <div id="ResultContainer">
        { isTyping && <div className="content__results w-100 d-flex align-items-center px-3 gap-2 my-2">
          <div className="py-2 px-2">
            <i className="fas fa-search"></i>
          </div>
          <p className="my-0 px-2 d-block">{searchText}</p>
        </div> }
        
        { isTyping && searchData.slice(0, 7).map((eachData, index) => (
          <div key={index} className="content__results w-100 d-flex align-items-center px-3 gap-2 my-2" onClick={() => document.location.reload()}>
            <div className="py-2 px-2">
              <i className="far fa-clock"></i>
            </div>
            <p className="my-0 px-2 d-block">{eachData.text.substr(1, eachData.text.length - 2)}</p>
          </div>
        )) }
      </div>
    </div>
  )
}