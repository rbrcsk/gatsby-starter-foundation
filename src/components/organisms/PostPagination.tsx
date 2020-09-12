import React from "react"
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"
import { BlogPostPageTemplateContext } from "../../types"
import { IconWrapper, PaginationAtoms } from "../atoms"

type PaginationProps = Pick<BlogPostPageTemplateContext, "previous" | "next">

export const PostPagination = (props: PaginationProps): JSX.Element => {
  let previousFragment: React.ReactNode
  let nextFragment: React.ReactNode

  if (
    props.previous?.frontmatter?.template === "blog-post" &&
    props.previous.frontmatter.slug !== undefined &&
    props.previous.frontmatter.title !== undefined
  ) {
    previousFragment = (
      <li>
        <PaginationAtoms.Link to={props.previous.frontmatter.slug} rel="prev">
          <p>
            <IconWrapper left>
              <RiArrowLeftLine />
            </IconWrapper>{" "}
            Previous
          </p>
          <PaginationAtoms.PostPageTitle>
            {props.previous.frontmatter.title}
          </PaginationAtoms.PostPageTitle>
        </PaginationAtoms.Link>
      </li>
    )
  }

  if (
    props.next?.frontmatter?.template === "blog-post" &&
    props.next.frontmatter.slug !== undefined &&
    props.next.frontmatter.title !== undefined
  ) {
    nextFragment = (
      <li>
        <PaginationAtoms.Link to={props.next.frontmatter.slug} rel="next">
          <p>
            Next{" "}
            <IconWrapper right>
              <RiArrowRightLine />
            </IconWrapper>
          </p>
          <PaginationAtoms.PostPageTitle>
            {props.next.frontmatter.title}
          </PaginationAtoms.PostPageTitle>
        </PaginationAtoms.Link>
      </li>
    )
  }

  return (
    <PaginationAtoms.PostContainer>
      <ul>
        {previousFragment}
        {nextFragment}
      </ul>
    </PaginationAtoms.PostContainer>
  )
}
