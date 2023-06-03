export enum FileUsage {
    Profile,
    Slider,
    Coin,
    Other
}


export enum Thumbnail {
    Small,
    Meduim,
    Large
}


export enum ImageSizeType {
    Small = 0,
    Medium = 1,
    Large = 2
}


export enum AuthenticationStatus {
    Reject = 0,
    Accept = 1,
    Pendding = 2,
}

export enum SortTypeDeposit {
    Amount = 0,
    CreationDate = 1
}


export enum ActionType {
    Create = 0,
    Update = 1,
    Delete = 2,
    Read = 3

}

export enum NotificationType{
    Notification = 0,
    Message = 1,
    Sms = 2,
    Email = 3,
}