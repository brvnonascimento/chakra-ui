import { chakra, Icon, Stack, Link } from "@chakra-ui/core"
import { MdEdit } from "react-icons/md"

export function EditPageLink({ href }: { href?: string }): JSX.Element {
  return (
    <Link href={href} isExternal>
      <Stack
        display="inline-flex"
        direction="row"
        spacing={1}
        align="center"
        opacity={0.7}
      >
        <Icon as={MdEdit} mr="1" />
        <chakra.span>Edit this page</chakra.span>
      </Stack>
    </Link>
  )
}
