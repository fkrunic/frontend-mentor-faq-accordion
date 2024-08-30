import {useState} from "react";
import IconMinus from "../../common/IconMinus.tsx";
import IconPlus from "../../common/IconPlus.tsx";
import {EntryContainerView} from "./EntryContainerView.tsx";
import {EntryTitleView} from "./EntryTitleView.tsx";
import {EntryDescriptionView} from "./EntryDescriptionView.tsx";

type EntryContainerProps = {
  title: string
  description: string
}

export default function EntryContainer({title, description}: EntryContainerProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen((prev) => !prev)
  }

  return (
    <EntryContainerView>
      <EntryTitleView onClick={handleClick}>
        <p>{title}</p>
        {isOpen ? <IconMinus/> : <IconPlus/>}
      </EntryTitleView>
      {isOpen && <EntryDescriptionView>{description}</EntryDescriptionView>}
    </EntryContainerView>
  )
}