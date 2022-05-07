import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy},
)

describe('Submit feedback',  () => {
    it('should be able to submit feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'This is a bug',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: 'This is a bug',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without coment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback with invalid screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'This is a bug',
            screenshot: 'imgage/png',
        })).rejects.toThrow();
    })
})
