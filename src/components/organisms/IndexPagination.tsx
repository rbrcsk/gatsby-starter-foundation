import React from "react"
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"
import { IconWrapper, PaginationAtoms } from "../atoms"

interface PaginationProps {
  isFirst: boolean
  isLast: boolean
  numPages: number
  currentPage: number
  blogSlug: string
  prevPage: string
  nextPage: string
}

export const IndexPagination = (props: PaginationProps): JSX.Element => (
  <PaginationAtoms.Container>
    <ul>
      {!props.isFirst && (
        <li>
          <PaginationAtoms.Link to={props.prevPage} rel="prev">
            <IconWrapper left>
              <RiArrowLeftLine />
            </IconWrapper>{" "}
            Previous
          </PaginationAtoms.Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <PaginationAtoms.Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            number
            isActive={props.currentPage === i + 1}
          >
            {i + 1}
          </PaginationAtoms.Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <PaginationAtoms.Link to={props.nextPage} rel="next">
            Next{" "}
            <IconWrapper right>
              <RiArrowRightLine />
            </IconWrapper>
          </PaginationAtoms.Link>
        </li>
      )}
    </ul>
  </PaginationAtoms.Container>
)
