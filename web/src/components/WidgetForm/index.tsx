import { CloseButton } from "../CloseButton";
import bugImgUrl from '../../assets/bug.svg';
import ideaImgUrl from '../../assets/idea.svg';
import thougthImgUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            src: bugImgUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            src: ideaImgUrl,
            alt: 'Imagem de uma lampada',
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            src: thougthImgUrl,
            alt: 'Imagem de uma nuvem de pensamentos',
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {feedbackSent ? (
                <FeedbackSuccessStep 
                    onFeedbackRestartRequest={handleRestartFeedback}
                />
            ) : (
                <>
                  {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                  ) : (
                    <FeedbackContentStep 
                      feedbackType={feedbackType} 
                      handleRestartFeedback={handleRestartFeedback}
                      onFeedbackSent={() => setFeedbackSent(true)}
                    />
                  )
                  }
                </>
            )
            
            }


            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline-offset-2">Rocketseat</a>
            </footer>
        </div>
    )
}