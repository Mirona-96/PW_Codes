function WeekDay (day){
    switch (day){
        case 1:
            return ("The month " + day +" is January")
            break
            case 2:
                return ("The month " + day +" is February")
                break
                case 3:
                    return ("The month " + day +" is March")
                    break
                    case 4:
                        return ("The month " + day +" is April")
                        break
                        case 5:
                            return ("The month " + day +" is May")
                            break
                            case 6:
                                return ("The month " + day +" is June")
                                break
                                case 7:
                                return ("The month " + day +" is July")
                                break
                                case 8:
                                    return ("The month " + day +" is August")
                                    break
                                    case 9:
                                        return ("The month " + day +" is September")
                                        break
                                        case 10:
                                            return ("The month " + day +" is October")
                                            break
                                            case 11:
                                                return ("The month " + day +" is November")
                                                break
                                                case 12:
                                                    return ("The month " + day +" is December")
                                                    break
                                                    default:
                                                        return ("No matchable month found")
                                                        break
    }

}

day = Math.floor (Math.random()*13)
console.log (WeekDay(day))