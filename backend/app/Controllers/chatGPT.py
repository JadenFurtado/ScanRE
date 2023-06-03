import openai


class CodePrompt:

    def fixedCode(self, code, apiKey):
        if len(code) > 200:
            return "code length exceeded"
        else:
            """
        code = '''
        def divide(a, b):
            result = a / b
            return result

        result = divide(10, 0)
        print(result)
        '''
        """
            # create a chat completion
            openai.api_key = apiKey
            chat_completion = openai.Edit.create(
                model="code-davinci-edit-001", instruction=f"Fix the vulnerability in the code:{code}")
        return chat_completion
# print the chat completion
# print(chat_completion)
