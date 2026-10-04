function SectionHeading({ top, bottom, as: Tag = 'h2' }) {
  return (
    <Tag className="display-heading reveal mb-10 md:mb-12">
      {top}
      <span className="ghost">{bottom}</span>
    </Tag>
  )
}

export default SectionHeading
