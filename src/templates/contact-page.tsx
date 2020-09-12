import React from "react"
import { graphql, PageProps } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button, IconWrapper, TextAlign } from "../components/atoms"
import { Form } from "../components/molecules"

export const pageQuery = graphql`
  query ContactPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const ContactPageTemplate = ({
  data,
}: PageProps<GatsbyTypes.ContactPageTemplateQuery>): JSX.Element | null => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark ?? {}

  if (!frontmatter || !markdownRemark) {
    return null
  }

  return (
    <Layout page narrow>
      <SEO
        title={frontmatter.title}
        description={frontmatter.title + " " + site?.siteMetadata?.title}
      />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html ?? "" }} />
      <Form
        action="/thanks"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Subject
            <input type="text" name="subject" />
          </label>
        </p>
        <p>
          <label>
            Message<textarea name="message"></textarea>
          </label>
        </p>
        <TextAlign align="right" as="p">
          <Button type="submit">
            Send Message{" "}
            <IconWrapper right flex>
              <RiSendPlane2Line />
            </IconWrapper>
          </Button>
        </TextAlign>
      </Form>
    </Layout>
  )
}

export default ContactPageTemplate
