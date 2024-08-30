import {ComponentProps, ReactNode} from "react";

type EntryDescriptionViewProps = ComponentProps<'p'> & {
  children: ReactNode
}

export function EntryDescriptionView({ children }: EntryDescriptionViewProps) {
  return <p className="font-medium text-[0.875rem] tracking-wider leading-5">{children}</p>
}
