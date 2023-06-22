// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, activeLanguageFilterId} = props
  const {id, language} = languageDetails

  const activeBtnClass = isActive ? 'active-language-btn' : ''

  const onClickLanguageFilter = () => {
    activeLanguageFilterId(id)
  }

  return (
    <li className="filter-item">
      <button
        type="button"
        className={`language-btn ${activeBtnClass}`}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
