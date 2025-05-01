# for example = {}[]()
# Output = true

# for example = {)
# Output = false



stringCotains = "{}{})"

def ValidateBracketChar(charcter):
    valid = 'true'
    if (charcter):
        reStore = []
        for i in charcter:
            reStore.append(i)

        for j, k in enumerate(reStore):
            try:
                while (valid=='true'):

                    if (k == '{'):
                        if (reStore[j+1] == '}'):
                            valid = 'true'
                        else:
                            valid = 'false'
                    elif (k == '}'):
                        if (reStore[j-1] == '{'):
                            valid = 'true'
                        else:
                            valid = 'false'

                    if (k == '('):
                        if (reStore[j+1] == ')'):
                            valid = 'true'
                        else:
                            valid = 'false'
                    elif (k == ')'):
                        if (reStore[j-1] == '('):
                            valid = 'true'
                        else:
                            valid = 'false'

                    if (k == '['):
                        if (reStore[j+1] == ']'):
                            valid = 'true'
                        else:
                            valid = 'false'
                    elif (k == ']'):
                        if (reStore[j-1] == '['):
                            valid = 'true'
                        else:
                            valid = 'false'
                    break

            except Exception as e:
                valid = 'false'
    else:
        valid = 'false'
    print(valid)



ValidateBracketChar(stringCotains)

    # if (i == '{'):

    # print(i)


def validate_brackets(brackets):
    stack = []
    pairs = {'{': '}', '[': ']', '(': ')'}
    for bracket in brackets:
        if bracket in pairs.keys():
            stack.append(bracket)
        elif stack and pairs[stack[-1]] == bracket:
            print(stack)
            print(pairs[stack[-1]] )
            print(bracket)
            stack.pop()
        else:
            return False
    return not stack


print(validate_brackets(stringCotains))