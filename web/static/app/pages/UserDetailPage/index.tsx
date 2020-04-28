import React, { FC } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

// import { Question } from '@/app/models/Question'
// import { Answer } from '@/app/models/Answer'

import words from '@/assets/strings'
import style from '@/app/pages/UserDetailPage/style.scss'
// import { QuestionItem } from '@/app/components/QuestionItem'
// import { AnswerOverview } from '@/app/components/AnswerOverview'
import { paths } from '@/app/common/paths'
// import { QUESTION_LIMIT } from '@/app/common/constants'
import { logout } from '@/app/common/api'
// import { retrieveQuestions, retrieveAnswers, logout } from '@/app/common/api'
import { getCurrentUserId } from '@/app/common/utils'

interface RouteParams {
  userId: string
}

const UserDetailPage: FC = () => {
  const history = useHistory()
  const { userId } = useParams<RouteParams>() // このuserIdをリクエストに利用する。
  console.log(userId)

  // useEffect(), useState(), retrieveQuestions(), retrieveAnswers()を組み合わせて、特定のユーザーの質問と回答を取得する。
  // - retrieveQuestions(userId)で指定したユーザーの質問を取得できる。
  // - retrieveAnswers({userId})で指定したユーザーの回答を取得できる。

  const currentUserId = getCurrentUserId()

  const handleLogin = () => {
    history.push(paths.login)
  }

  return (
    <>
      <Header userId={currentUserId} handleLogin={handleLogin} handleLogout={logout} />

      <div className={style.main}>
        <div className={style.pageTitle}>{words.user.title}</div>
        <hr className={style.hr} />
        <div className={style.listTitle}>{words.user.questionList}</div>
        {/* ここでQuestionItemを利用して質問のリストを表示する */}
        <div className={style.listTitle}>{words.user.answerList}</div>
        {/* ここでAnswerOverviewを利用して回答のリストを表示する */}
      </div>

      <Footer />
    </>
  )
}

export default UserDetailPage