import {ComponentProps, ReactNode} from "react";

type EntryTitleProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function EntryTitleView({ children, ... props}: EntryTitleProps) {
  return (
    <div className="flex flex-row justify-between items-center" {...props}>
      {children}
    </div>
  )
}
