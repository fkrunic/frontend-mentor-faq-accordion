import {ComponentProps, ReactNode} from "react";

type EntryContainerViewProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function EntryContainerView({ children }: EntryContainerViewProps) {
  return <div className="flex flex-col gap-5 items-center">{children}</div>
}
